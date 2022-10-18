namespace front_to_back.Models
{
    public class Category
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public ICollection<CategoryComponent> CategoryComponents { get; set; }
    }
}
