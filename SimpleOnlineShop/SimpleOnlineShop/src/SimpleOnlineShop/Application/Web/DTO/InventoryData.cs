﻿using System.Collections;
using System.Collections.Generic;

namespace SimpleOnlineShop.SimpleOnlineShop.Application.Web.DTO
{
    public class InventoryData
    {
        public string Id { get; set; }
        public string Name { get; set; }
        public IList<ProductData> Products { get; set; } = new List<ProductData>();
    }
}