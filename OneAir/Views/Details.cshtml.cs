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
    public class DetailsModel : PageModel
    {
        private readonly OneAir.Models.SqlDbContext _context;

        public DetailsModel(OneAir.Models.SqlDbContext context)
        {
            _context = context;
        }

        public AirQuality AirQuality { get; set; }

        public async Task<IActionResult> OnGetAsync(long? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            AirQuality = await _context.AirQualities.FirstOrDefaultAsync(m => m.AirQualityID == id);

            if (AirQuality == null)
            {
                return NotFound();
            }
            return Page();
        }
    }
}
