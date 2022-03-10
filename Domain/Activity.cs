using System;

namespace Domain
{
    public class Activity
    {


        public Guid Id { get; set; } //guid creates an id on the client side
        //Id is a reserved word - if not used we need to use the [primarykey] or smtg
        public string Title { get; set; }
        public DateTime Date { get; set; }
        public string Description { get; set; }
        public string Category { get; set; }
        public string City { get; set; }
        public string Venue { get; set; }

    }
}