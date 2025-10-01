// server-dotnet/Program.cs
// .NET 8 minimal API sample

var builder = WebApplication.CreateBuilder(args);

// (Optional) allow all CORS while testing locally
builder.Services.AddCors(o => o.AddDefaultPolicy(p =>
    p.AllowAnyOrigin().AllowAnyHeader().AllowAnyMethod()));

var app = builder.Build();
app.UseCors();

// GET /api/hello/{name}
app.MapGet("/api/hello/{name}", (string name) =>
    Results.Ok(new { message = $"Hello, {name}!" })
);

// Health check
app.MapGet("/api/health", () => Results.Ok("OK"));

app.Run();
