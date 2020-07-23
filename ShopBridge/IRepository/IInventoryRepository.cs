using ShopBridge.Models;
using System.Collections.Generic;

namespace ShopBridge.IRepository
{
    public interface IInventoryRepository
    {
        IEnumerable<InventoryModel> GetInventories();
        InventoryModel CreateInventory(InventoryModel model);
        bool DeleteInventory(int id);
        InventoryModel InventoryDetails(int id);
    }
}
