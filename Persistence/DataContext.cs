using Domain;
using Microsoft.EntityFrameworkCore;

namespace Persistence
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions options) : base(options)
        {

        }

        //creating all the tables in my BD
        public DbSet<Activity> Activities { get; set; }
    }
}