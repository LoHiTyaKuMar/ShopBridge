using ShopBridge.IRepository;
using ShopBridge.Models;
using ShopBridge.Repository; 
using System.Linq;
using System.Web.Http; 

namespace ShopBridge.Controllers
{
    [RoutePrefix("Inventory")]
    public class InventoryController : ApiController
    {
        private readonly IInventoryRepository _inventoryRepository;
        public InventoryController() { _inventoryRepository = new InventoryRepository(); } 

        [HttpGet]
        [Route("GetInventories")]
        public IHttpActionResult GetInventories()
        {
            return Ok(this._inventoryRepository.GetInventories());
        }

        [HttpPost]
        [Route("CreateInventory")]
        public IHttpActionResult CreateInventory(InventoryModel model)
        {
            if (ModelState.IsValid)
            {
                return Ok(_inventoryRepository.CreateInventory(model));
            }
            else
            {
                return BadRequest(string.Join(", ", ModelState.Values
                                        .SelectMany(x => x.Errors)
                                        .Select(x => x.ErrorMessage)));
            } 
        }

        [HttpPost]
        [Route("DeleteInventory/{id}")]
        public IHttpActionResult DeleteInventory(int id)
        {
            return Ok(_inventoryRepository.DeleteInventory(id));
        }

        [HttpPost]
        [Route("InventoryDetails/{id}")]
        public IHttpActionResult InventoryDetails(int id)
        {
            return Ok(_inventoryRepository.InventoryDetails(id));
        }
    }
}
