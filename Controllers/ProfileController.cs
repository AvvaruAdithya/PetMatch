// ProfileController.cs
using System;
using System.Configuration;
using System.Data.SqlClient;
using System.Web;
using System.Web.Http;

namespace backend_app.Controllers
{
    public class ProfileController : ApiController
    {
        [HttpGet]
        [Route("Profile")]
        [Authorize] // Make sure to authorize the request
        public IHttpActionResult GetProfile()
        {
            try
            {
                // Get the authenticated user's ID from the User.Identity object
                string userId = HttpContext.Current.User.Identity.Name; // Assuming the username is used as the identity

                // Query the database to get user profile data based on the userId
                string query = "SELECT CustomerName, PhoneNo, Address, PetName, Petgender, PetAge, breed, health_status, description FROM Registration WHERE CustomerName = @CustomerId";

                using (SqlConnection connection = new SqlConnection(ConfigurationManager.ConnectionStrings["conn"].ConnectionString))
                using (SqlCommand command = new SqlCommand(query, connection))
                {
                    connection.Open();
                    command.Parameters.AddWithValue("@CustomerId", userId);

                    using (SqlDataReader reader = command.ExecuteReader())
                    {
                        if (reader.Read())
                        {
                            // Map the data to a profile object
                            var profileData = new
                            {
                                CustomerName = reader["CustomerName"].ToString(),
                                PhoneNo = reader["PhoneNo"].ToString(),
                                Address = reader["Address"].ToString(),
                                PetName = reader["PetName"].ToString(),
                                Petgender = reader["Petgender"].ToString(),
                                PetAge = reader["PetAge"].ToString(),
                                breed = reader["breed"].ToString(),
                                health_status = reader["health_status"].ToString(),
                                description = reader["description"].ToString(),
                            };

                            return Ok(profileData);
                        }
                    }
                }

                // If the user profile is not found
                return NotFound();
            }
            catch (Exception ex)
            {
                // Handle exceptions and log them
                return InternalServerError(ex);
            }
        }
    }
}
