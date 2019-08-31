using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Paging.WebApi.Data;
using Paging.WebApi.Models;

namespace Paging.WebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        private Context _context;

        public UsersController(Context context)
        {
            _context = context;
        }

        [HttpGet]
        public PageResult<Users> Get(int? page, int pagesize = 10)
        {
            var countDetails = _context.Users.Count();
            return new PageResult<Users>
            {
                Items = _context.Users.Skip((page - 1 ?? 0) * pagesize).Take(pagesize).ToList(),
                Count = countDetails,
                PageSize = pagesize,
                PageIndex = page ?? 1
            };
        }

    }
}