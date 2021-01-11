using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.EntityFrameworkCore;
using OneAir.Models;

namespace OneAir.Pages
{
    public class MapModel : PageModel
    {
        private readonly OneAir.Models.SqlDbContext _context;

        public MapModel(OneAir.Models.SqlDbContext context)
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
