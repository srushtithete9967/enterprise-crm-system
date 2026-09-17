// CRM sample data

let leads = [
    {
        name: "Rahul Sharma",
        email: "rahul@gmail.com",
        company: "Tech Solutions",
        status: "New"
    },
    {
        name: "Sneha Patil",
        email: "sneha@gmail.com",
        company: "Bright Industries",
        status: "Contacted"
    },
    {
        name: "Amit Joshi",
        email: "amit@gmail.com",
        company: "Digital Works",
        status: "Converted"
    },
    {
        name: "Priya Shah",
        email: "priya@gmail.com",
        company: "Creative Hub",
        status: "New"
    }
];

let customers = [
    {
        name: "Amit Joshi",
        company: "Digital Works",
        email: "amit@gmail.com"
    },
    {
        name: "Neha Kulkarni",
        company: "Smart Tech",
        email: "neha@gmail.com"
    },
    {
        name: "Rohan Deshmukh",
        company: "NextGen Solutions",
        email: "rohan@gmail.com"
    }
];

let deals = [
    { name: "Website Project", status: "New" },
    { name: "Mobile Application", status: "Contacted" },
    { name: "CRM Development", status: "Converted" }
];


// Update dashboard numbers
function updateDashboard() {

    document.getElementById("totalLeads").textContent = leads.length;

    document.getElementById("totalCustomers").textContent =
        customers.length;

    document.getElementById("activeDeals").textContent =
        deals.filter(deal => deal.status !== "Converted").length;

    document.getElementById("revenue").textContent = "₹1,25,000";
}


// Display leads
function displayLeads() {

    const table = document.getElementById("leadTable");

    table.innerHTML = "";

    leads.forEach(lead => {

        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${lead.name}</td>
            <td>${lead.email}</td>
            <td>${lead.company}</td>
            <td>
                <span class="status">${lead.status}</span>
            </td>
        `;

        table.appendChild(row);
    });
}


// Display customers
function displayCustomers() {

    const customerList = document.getElementById("customerList");

    customerList.innerHTML = "";

    customers.forEach(customer => {

        const div = document.createElement("div");

        div.className = "customer";

        div.innerHTML = `
            <h3>${customer.name}</h3>
            <p>${customer.company}</p>
            <p>${customer.email}</p>
        `;

        customerList.appendChild(div);
    });
}


// Display sales pipeline
function displayPipeline() {

    document.getElementById("newDeals").innerHTML = "";
    document.getElementById("contactedDeals").innerHTML = "";
    document.getElementById("convertedDeals").innerHTML = "";

    deals.forEach(deal => {

        const item = document.createElement("p");

        item.textContent = "📌 " + deal.name;

        if (deal.status === "New") {
            document.getElementById("newDeals").appendChild(item);
        }

        else if (deal.status === "Contacted") {
            document.getElementById("contactedDeals").appendChild(item);
        }

        else {
            document.getElementById("convertedDeals").appendChild(item);
        }
    });
}


// Add new lead
function addLead() {

    const name = prompt("Enter lead name:");

    if (!name) {
        return;
    }

    const email = prompt("Enter email:");

    if (!email) {
        return;
    }

    const company = prompt("Enter company:");

    if (!company) {
        return;
    }

    const newLead = {
        name: name,
        email: email,
        company: company,
        status: "New"
    };

    leads.push(newLead);

    updateDashboard();
    displayLeads();

    alert("Lead added successfully!");
}


// Load everything when page opens
updateDashboard();
displayLeads();
displayCustomers();
displayPipeline();