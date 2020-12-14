using System;
using Microsoft.EntityFrameworkCore;
namespace OneAir.Models
{
    public class SqlDbContext : DbContext
    {
        public SqlDbContext(DbContextOptions<SqlDbContext> options)
          : base(options)
        {
        }
        public DbSet<AirQuality> AirQualities { get; set; }
    }
}
