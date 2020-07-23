using ShopBridge.Database;
using ShopBridge.IRepository;
using ShopBridge.Models;
using System.Collections.Generic;
using System.Linq;

namespace ShopBridge.Repository
{
    public class InventoryRepository : IInventoryRepository
    {
        private readonly ShopBridgeEntities _shopBridgeEntities;

        public InventoryRepository() { this._shopBridgeEntities = new ShopBridgeEntities(); }

        public IEnumerable<InventoryModel> GetInventories()
        {
            return _shopBridgeEntities.spGetAllInventories().Select(i => new InventoryModel
            {
                Id = i.Id,
                Description = i.Description,
                Name = i.Name,
                Price = i.Price.HasValue ? i.Price.Value : 0
            }).ToList();
        }

        public InventoryModel CreateInventory(InventoryModel model)
        {
            return _shopBridgeEntities.spInsertInventory(model.Name, model.Description, model.Price).Select(x => new InventoryModel
            {
                Id = x.Id,
                Description = x.Description,
                Price = x.Price.HasValue ? x.Price.Value : 0,
                Name = x.Name
            }).FirstOrDefault();
        }

        public bool DeleteInventory(int id)
        {
            return _shopBridgeEntities.spDeleteInventoryWhereIdIs(id) == -1 ? true : false;
        }

        public InventoryModel InventoryDetails(int id)
        {
            return _shopBridgeEntities.spGetInventoryDetailsForId(id).Select(i => new InventoryModel
            {
                Id = i.Id,
                Description = i.Description,
                Name = i.Name,
                Price = i.Price.HasValue ? i.Price.Value : 0
            }).FirstOrDefault();
        }
    }
}