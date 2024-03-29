﻿namespace COLP.Person.API.ViewModels
{
    public class ColporteurViewModel
    {
        public string Filename { get; set; }
        public string ImageData { get; set; }
        public decimal Goal { get; set; }
        public DateTime SinceDate { get; set; }
        public IEnumerable<Guid> CategoryIds { get; set; }

        public string Name { get; set; }
        public string Lastname { get; set; }
        public string PhoneNumber { get; set; }
        public string PostalCode { get; set; }
        public string UF { get; set; }
        public string City { get; set; }
        public string District { get; set; }
        public string Address { get; set; }
        public string AddressNumber { get; set; }
        public string Complement { get; set; }
        public string CPF { get; set; }
        public string RG { get; set; }
        public string ShirtSize { get; set; }
    }
}
