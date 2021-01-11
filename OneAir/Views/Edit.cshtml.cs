using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.EntityFrameworkCore;
using OneAir.Models;

namespace OneAir.Views
{
    public class EditModel : PageModel
    {
        private readonly OneAir.Models.SqlDbContext _context;

        public EditModel(OneAir.Models.SqlDbContext context)
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

        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://aka.ms/RazorPagesCRUD.
        public async Task<IActionResult> OnPostAsync()
        {
            if (!ModelState.IsValid)
            {
                return Page();
            }

            _context.Attach(AirQuality).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!AirQualityExists(AirQuality.AirQualityID))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return RedirectToPage("./Index");
        }

        private bool AirQualityExists(long id)
        {
            return _context.AirQualities.Any(e => e.AirQualityID == id);
        }
    }
}
