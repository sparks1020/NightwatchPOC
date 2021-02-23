using System;
using System.IO;
using System.Text;

using Amazon.Lambda.Core;
using Amazon.Lambda.DynamoDBEvents;
using Amazon.DynamoDBv2.Model;
using System.Linq;
using System.Collections.Generic;
using SyllabusZip.Authentication;
using Microsoft.EntityFrameworkCore;

// Assembly attribute to enable the Lambda function's JSON input to be converted into a .NET class.
[assembly: LambdaSerializer(typeof(Amazon.Lambda.Serialization.SystemTextJson.DefaultLambdaJsonSerializer))]

namespace SyllabusZipSort
{
    public class Function
    {
        private ApplicationDbContext dbContext;

        public void FunctionHandler(DynamoDBEvent dynamoEvent, ILambdaContext context)
        {
            context.Logger.LogLine($"Beginning to process {dynamoEvent.Records.Count} records...");

            foreach (var record in dynamoEvent.Records)
            {
                //context.Logger.LogLine($"Event ID: {record.Dynamodb}");
                context.Logger.LogLine($"Event Name: {record.EventName}");
				
				// TODO: Add business logic processing the record.Dynamodb object.
            }
            var options = new DbContextOptionsBuilder<ApplicationDbContext>();
            options.UseSqlServer(Environment.GetEnvironmentVariable("SqlConnectionString"));
            //options.UseSqlServer("Server=tcp:syllabuszip.database.windows.net,1433;Initial Catalog=SyllabusZip;Persist Security Info=False;User ID=syllabusadmin;Password=:>6=T.j^8n!%^u\"B;MultipleActiveResultSets=False;Encrypt=True;TrustServerCertificate=False;Connection Timeout=30;");
            dbContext = new ApplicationDbContext(options.Options);
            context.Logger.LogLine("Stream processing complete.");

            //Sort the data into the database
            SyllabusIntoDataBase(dynamoEvent, context);
        }

        public void SyllabusIntoDataBase(DynamoDBEvent dynamoEvent, ILambdaContext context)
        {
            //Getting the document as input
            var document = dynamoEvent.Records.First().Dynamodb.NewImage;
            //context.Logger.LogLine(document.);
            context.Logger.LogLine(document["id"].S);
            Guid syllabusId;
            try
            {
                 syllabusId = Guid.Parse(document["id"].S);
            }

            catch
            {
                return;
            }

            //Getting values from Contact Section
            Dictionary<string, AttributeValue> contact_value = document["Contact"].M;

            var email = contact_value["Email"].S;
            var phone = contact_value["Phone"].S;
            var office = contact_value["Office"].S;
            //var officehours = contact_value["Office Hours"].S;
            //var mailbox = contact_value["Mailbox"].S;
            //var classroom = contact_value["Classroom"].S;
            //var classtime = contact_value["ClassTime"].S;
            //var teacher = contact_value["Teacher"].S;
            //var classtitle = contact_value["Class"].S;
            ContactInfo contact = new ContactInfo();
            contact.Email = email;
            contact.Phone = phone;
            contact.Office = office;
            //contact.OfficeHours = officehours;
            //contact.Mailbox = mailbox;
            //contact.Classroom = classroom;
            //contact.ClassTime = classtime;
            //contact.Teacher = teacher;
            //contact.ClassTitle = classtitle;
            contact.SyllabusId = syllabusId;
            dbContext.Contact.Add(contact);
            dbContext.SaveChanges();



            //Getting values from Schedule Section
            //Dictionary<string, AttributeValue> schedule_value = document["Schedule"].M;
            //foreach (var item in schedule_value)
            //{
            //    var date = item.Value.M.ContainsKey(item.Key) ? item.Value.M[item.Key].S : string.Empty;
            //    var chapter = item.Value.M["Chapter"].S;
            //    var topic = item.Value.M["Topic"].S;
            //    var homework = item.Value.M["Assignments"].S;
            //    var project = item.Value.M["Assignments"].S;
            //    var exam = item.Value.M["Exams"].S;
            //}

            //Getting values from Assignments Section
            Dictionary<string, AttributeValue> assignment_value = document["Assignments"].M;
            foreach (var item in assignment_value)
            {
                Assignment assignment = new Assignment();
                var date = item.Key;
                assignment.Date = date;
                if (item.Value.L.Count >= 1)
                {
                    var chapter = item.Value.L[0].S;
                    assignment.Chapter = chapter;
                }

                if (item.Value.L.Count >= 2)
                {
                    var homework = item.Value.L[1].S;
                    assignment.Homework = homework;
                }

                if (item.Value.L.Count >= 3)
                {
                    var project = item.Value.L[2].S;
                    assignment.Project = project;
                }
                assignment.SyllabusId = syllabusId;
                dbContext.Assignments.Add(assignment);
                dbContext.SaveChanges();
            }

            //Getting values from Exams Section
            Dictionary<string, AttributeValue> exam_value = document["Exams"].M;
            foreach (var item in exam_value)
            {
                var examdate = item.Key;
                var examtype = item.Value.S;
                Exam exam = new Exam();
                exam.Date = examdate;
                exam.ExamType = examtype;
                exam.SyllabusId = syllabusId;
                dbContext.Exams.Add(exam);
                dbContext.SaveChanges();
            }


            //Getting values from Materials Section
            //THIS IS TEMPORARY UNTIL MATERIALS IS ADDED TO THE ML SCRIPT TEMP TEMP TEMP
            //Dictionary<string, AttributeValue> materials_value = document["Materials"].M;
            //foreach (var item in materials_value)
            //{
            //    var material_type = item.Key;
            //    var material_values = item.Value.SS;
            //    foreach (var material_item in material_values)
            //    {
            //        Materials materials = new Materials();
            //        materials.Material_Type = material_type;
            //        materials.Material_Value = material_item;
            //        materials.SyllabusId = syllabusId;
            //        dbContext.Materials.Add(materials);
            //        dbContext.SaveChanges();
            //    }

            //}

        }
    }
}