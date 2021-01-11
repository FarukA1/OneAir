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
    public class DeleteModel : PageModel
    {
        private readonly OneAir.Models.SqlDbContext _context;

        public DeleteModel(OneAir.Models.SqlDbContext context)
        {
            _context = context;
        }

        [BindProperty]
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

        public async Task<IActionResult> OnPostAsync(long? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            AirQuality = await _context.AirQualities.FindAsync(id);

            if (AirQuality != null)
            {
                _context.AirQualities.Remove(AirQuality);
                await _context.SaveChangesAsync();
            }

            return RedirectToPage("./Index");
        }
    }
}
