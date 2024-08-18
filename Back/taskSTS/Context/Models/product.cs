namespace taskSTS.Context.Models
{
    public class product
    {
        public int id { get; set; }
        public string title { get; set; }
        public double price { get; set; }
        public string image {  get; set; }
        public category category { get; set; }
    }
}
