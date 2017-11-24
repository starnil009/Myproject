using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using UrbanTrend.Data;
using UrbanTrend.Models;
using Microsoft.EntityFrameworkCore;

// For more information on enabling Web API for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace UrbanTrend.API
{
    [Route("api/[controller]")]
    public class CategoriesController : Controller
    {
        ApplicationDbContext _db;
            public CategoriesController( ApplicationDbContext db)
        {
            _db = db;
        }

        // GET: api/values
        [HttpGet]
        public List<Category>  GetCategories()
        {
            return _db.Categories.ToList();
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public Category Get(int id)
        {


            return _db.Categories.FirstOrDefault();
        }

        // POST api/values
        [HttpPost]
        public IActionResult Post([FromBody]Category cat)
        {if(cat == null)
            {
                return BadRequest();
            }
            else if (cat.Id == 0)
            {
                _db.Categories.Add(cat);
                return Ok();
            }
            else { return BadRequest(); }
        }

       
        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {

        }
    }
}
