namespace COLP.Person.API.Dtos
{
    public class ColporteurDto
    {
        public Guid Id { get; set; }
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
        public bool IsActive { get; set; }
        public DateTime SinceDate { get; set; }
        public Guid? TeamId { get; set; }
        public Guid Imageid { get; set; }
    }
}
