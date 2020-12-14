using System;
namespace OneAir.Models
{
    public class AirQuality
    {
        public long AirQualityID { get; set; }
        public Guid DeviceID { get; set; }
        public DateTime Time { get; set; }
        public double Latitude { get; set; }
        public double Longitude { get; set; }
        public int PM10 { get; set; }
        public int PM25 { get; set; }
    }
}
