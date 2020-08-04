using System.ComponentModel.DataAnnotations;

namespace ShopBridge.Models
{
    public class InventoryModel
    {
        public int Id { get; set; }
        [Required]
        public string Name { get; set; }
        public string Description { get; set; }
        [Range(0, int.MaxValue, ErrorMessage = "Please enter a price bigger than {1}")]
        public decimal Price { get; set; }
    }
}