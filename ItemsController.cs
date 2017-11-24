using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using UrbanTrend.Data;
using UrbanTrend.Models;
using Microsoft.AspNetCore.Authorization;

// For more information on enabling Web API for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace UrbanTrend.API
{
    [Route("api/[controller]")]
    public class ItemsController : Controller
    {
        ApplicationDbContext _db;
            public ItemsController(ApplicationDbContext db)
        {
            _db = db;
        }



        // GET: api/values
        [HttpGet]
        public List<Item> ListItems()
        {
            return _db.Items.ToList();
        }

        // GET api/values/5
        [HttpGet("appetizer")]
        public List<Item> Getappetizer()
        {
            List<Item> appetizer = (from a in _db.Items
                                    where a.Category.Id == 1
                                    select a).ToList();

            return appetizer;
        }

        // GET api/values/5
        [HttpGet("soup")]
        public List<Item> Getsoup()
        {
            List<Item> soup = (from s in _db.Items
                                    where s.Category.Id == 2
                                    select s).ToList();

            return soup;
        }

        // GET api/values/5
        [HttpGet("salad")]
        public List<Item> Getsalad()
        {
            List<Item> salad = (from S in _db.Items
                               where S.Category.Id == 3
                               select S).ToList();

            return salad;
        }

        // GET api/values/5
        [HttpGet("entree")]
        public List<Item> Getentree()
        {
            List<Item> entree = (from e in _db.Items
                               where e.Category.Id == 4
                               select e).ToList();

            return entree;
        }

        // GET api/values/5
        [HttpGet("beverage")]
        public List<Item> Getbeverage()
        {
            List<Item> beverage = (from b in _db.Items
                               where b.Category.Id == 5
                               select b).ToList();

            return beverage;
        }
        // GET api/values/5
        [HttpGet("dessert")]
        public List<Item> Getdessert()
        {
            List<Item> dessert = (from d in _db.Items
                               where d.Category.Id == 6
                               select d).ToList();

            return dessert;
        }

        // POST api/values
        [HttpPost]

        public IActionResult Post([FromBody]Item item)
        {
            if (item == null)
            {
                return BadRequest();
            }
            else if (item.Id == 0)
            {

                Category getCat = (from c in _db.Categories
                                   where c.Id == item.Category.Id
                                   select
                                   c).FirstOrDefault();

                item.Category = getCat;

                _db.Items.Add(item);
                _db.SaveChanges();

                return Ok();
            }
            else
            {
                return BadRequest();
            }
        }
         [HttpPost]
        public IActionResult Edit([FromBody] Item item)
        {

            if (item == null)
            {
                Item editItem = (from E in _db.Items
                                 where E.Id == item.Id
                                 select
                                 E).FirstOrDefault();


            }
            _db.Items.Update(item);
            _db.SaveChanges();
            {
                return Ok();
            }

        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            var item = _db.Items.FirstOrDefault();
            if (item == null)
            {
                return NotFound();
            }

            _db.Items.Remove(item);
            _db.SaveChanges();
            return Ok();
        }
    }
}
