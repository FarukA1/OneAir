using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.EntityFrameworkCore;
using OneAir.Models;

namespace OneAir.Views
{
    public class IndexModel : PageModel
    {
        private readonly OneAir.Models.SqlDbContext _context;

        public IndexModel(OneAir.Models.SqlDbContext context)
        {
            _context = context;
        }

        public IList<AirQuality> AirQuality { get;set; }

        public async Task OnGetAsync()
        {
            AirQuality = await _context.AirQualities.ToListAsync();
        }
    }
}
