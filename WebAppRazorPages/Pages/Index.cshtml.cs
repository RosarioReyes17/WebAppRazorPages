using Dapper;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Data;
using System.Linq;
using System.Threading.Tasks;
using WebAppRazorPages.Models;


namespace WebAppRazorPages.Pages
{
    public class IndexModel : PageModel
    {
        private readonly IDbConnection _connection;
        private readonly ILogger<IndexModel> _logger;
        
        public IndexModel(
            IDbConnection connection,

            ILogger<IndexModel> logger)
        {
            _connection = connection;
            _logger = logger;
        }

        public ProductModel product{ get; set; }



        public void OnGet()
        {


        }

        public IActionResult onPost()
        {
            return BadRequest();
        }

        public IActionResult OnGetProducts()
        {
            var products = _connection.Query<product>("select* from Products");
            return new OkObjectResult(products);
        }

        public class ProductModel
        {


            [Required]
            public string ProductName { get; set; }
            
            [Required]
            public int? SupplierID { get; set; }
            
            [Required]
            public int? CategoryID { get; set; }
            
            [Required]
            public string QuantityPerUnit { get; set; }
            
            [Required]
            public decimal? UnitPrice { get; set; }

            [Required]
            public short? UnitsInStock { get; set; }

            [Required]
            public short? UnitsOnOrder { get; set; }

            [Required]
            public short? ReorderLevel { get; set; }

            [Required]
            public bool Discontinued { get; set; }
        }
    }
}
