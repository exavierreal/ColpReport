namespace COLP.Person.API.ViewModels
{
    public class LeaderViewModel
    {
        public string Filename { get; set; }
        public string ImageData { get; set; }
        public decimal Goal { get; set; }
        public DateTime SinceDate { get; set; }
        public IEnumerable<Guid> CategoryIds { get; set; }
    }
}
