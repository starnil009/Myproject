using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using UrbanTrend.Models;
using UrbanTrend.Data;

// For more information on enabling Web API for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace UrbanTrend.API
{
    [Route("api/[controller]")]
    public class ContactController : Controller
    {
        ApplicationDbContext _db;

        public ContactController ( ApplicationDbContext db)
        {
            _db = db;
        }

        // GET: api/values
        [HttpGet]
        public List<Contact> GetContacts()
        {
            return _db.Contacts.ToList();
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public Contact Get(int id)
        {
            return _db.Contacts.FirstOrDefault();
        }

        // POST api/values
        [HttpPost]
        public IActionResult Post([FromBody]Contact contact)
        {
            if (contact == null)
            {
                return BadRequest();
            }
            else if (contact.Id == 0)
            {
                Contact getContact = (from c in _db.Contacts
                                      where c.Id == contact.Id
                                      select
                                      c).FirstOrDefault();

                _db.Contacts.Add(contact);
                _db.SaveChanges();
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
