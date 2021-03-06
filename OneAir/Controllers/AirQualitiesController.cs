using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Web.Http.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using OneAir.Models;

namespace OneAir.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AirQualitiesController : ControllerBase
    {
        private readonly SqlDbContext _context;

        public AirQualitiesController(SqlDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<AirQuality>>> GetAirQualities()
        {
            return await _context.AirQualities.ToListAsync();
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<AirQuality>> GetAirQuality(long id)
        {
            var airQuality = await _context.AirQualities.FindAsync(id);

            if (airQuality == null)
            {
                return NotFound();
            }

            return airQuality;
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> PutAirQuality(long id, AirQuality airQuality)
        {
            if (id != airQuality.AirQualityID)
            {
                return BadRequest();
            }

            _context.Entry(airQuality).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!AirQualityExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        [HttpPost]
        public async Task<ActionResult<AirQuality>> PostAirQuality(AirQuality airQuality)
        {
            _context.AirQualities.Add(airQuality);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetAirQuality", new { id = airQuality.AirQualityID }, airQuality);
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult<AirQuality>> DeleteAirQuality(long id)
        {
            var airQuality = await _context.AirQualities.FindAsync(id);
            if (airQuality == null)
            {
                return NotFound();
            }

            _context.AirQualities.Remove(airQuality);
            await _context.SaveChangesAsync();

            return airQuality;
        }

        private bool AirQualityExists(long id)
        {
            return _context.AirQualities.Any(e => e.AirQualityID == id);
        }
    }
}
