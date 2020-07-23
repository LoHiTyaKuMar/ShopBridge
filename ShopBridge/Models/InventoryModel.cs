using System.ComponentModel.DataAnnotations;

namespace ShopBridge.Models
{
    public class InventoryModel
    {
        public int Id { get; set; }
        [Required]
        public string Name { get; set; }
        public string Description { get; set; }
        public decimal Price { get; set; }
    }
}