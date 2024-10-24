const menuIcon = document.getElementById("menuIcon");
const sidebarOne = document.getElementById("sidebarOne");
const sidebarTwo = document.getElementById("sidebarTwo");

menuIcon.addEventListener("click", () => {
  if (menuIcon.classList.contains("open")) {
    menuIcon.classList.add("close");
    menuIcon.classList.remove("open");
    menuIcon.src = "../assets/menu-close.svg";
    sidebarOne.classList.remove("hidden");
    sidebarTwo.classList.remove("hidden");
    sidebarOne.style.display = "flex";
    sidebarTwo.style.display = "flex";
  } else {
    menuIcon.classList.remove("close");
    menuIcon.classList.add("open");
    menuIcon.src = "../assets/menu-open.svg";
    sidebarOne.classList.add("hidden");
    sidebarTwo.classList.add("hidden");
    sidebarOne.style.display = "none";
    sidebarTwo.style.display = "none";
  }
});

const dashboardTableData = [
  {
    ID: 10321,
    Name: "GIG Logistics",
    Class: "Marine",
    "Inspection method": "Digital",
    Officer: "Mustapha Onasanya",
    Status: "QUOTE REQUEST",
    elipseColor: "#6941C6",
    btn_text_color: "#9F9F9F",
    btn_padding_color: "transparent",
  },
  {
    ID: 10321,
    Name: "Shoprite Stores",
    Class: "Property",
    "Inspection method": "Manual",
    Officer: "Mustapha Onasanya",
    Status: "Completed",
    elipseColor: "#175CD3",
    btn_text_color: "#027A48",
    btn_padding_color: "#ECFDF3",
  },
  {
    ID: 10321,
    Name: "Abiodun Abayomi",
    Class: "Motors",
    "Inspection method": "Digital",
    Officer: "Mustapha Onasanya",
    Status: "Ongoing",
    elipseColor: "#FF7A00",
    btn_text_color: "#FF7A00",
    btn_padding_color: "#FFDEBF",
  },
  {
    ID: 10321,
    Name: "Ben's Agro Allied",
    Class: "Agric",
    "Inspection method": "Manual",
    Officer: "Mustapha Onasanya",
    Status: "SENT TO ENGINEER",
    elipseColor: "#00B388",
    btn_text_color: "#9F9F9F",
    btn_padding_color: "transparent",
  },
  {
    ID: 10321,
    Name: "Abiodun Abayomi",
    Class: "Bond",
    "Inspection method": "Digital",
    Officer: "Mustapha Onasanya",
    Status: "Link expired",
    elipseColor: "#FDC75B",
    btn_text_color: "#B42318",
    btn_padding_color: "#FEF3F2",
  },
  {
    ID: 10321,
    Name: "Julius Berger",
    Class: "Engineering",
    "Inspection method": "Digital",
    Officer: "Mustapha Onasanya",
    Status: "Inspection link",
    elipseColor: "#E30000",
    btn_text_color: "##344054",
    btn_padding_color: "#F2F4F7",
    icon: "./assets/table-xicon.svg",
  },
  {
    ID: 10321,
    Name: "Abiodun Abayomi",
    Class: "Agric",
    "Inspection method": "Digital",
    Officer: "Mustapha Onasanya",
    Status: "Completed",
    elipseColor: "#00B388",
    btn_text_color: "#027A48",
    btn_padding_color: "#ECFDF3",
    icon: "./assets/table-backicon.svg",
  },
];

const dashboard_table_body = document.getElementById("dashboard-table-body");

dashboardTableData.forEach((item) => {
  dashboard_table_body.innerHTML += `
    <tr>
                  <td class="p-4 border-b border-blue-gray-50">
                    <p
                      class="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal"
                    >
                      ${item.ID}
                    </p>
                  </td>
                  <td class="p-4 border-b border-blue-gray-50">
                    <p
                      class="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal"
                    >
                    ${item.Name}
                    </p>
                  </td>
                  <td class="p-4 border-b border-blue-gray-50">
                    <div class="flex items-center justify-start gap-2">
                      <span class="rounded-full w-2 h-2 bg-[${
                        item.elipseColor
                      }]"></span>
                      <p
                        class="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal"
                      >
                      ${item.Class}
                      </p>
                    </div>
                  </td>
                  <td class="p-4 border-b border-blue-gray-50">
                    <p
                      class="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal"
                    >
                    ${item["Inspection method"]}
                    </p>
                  </td>
                  <td class="p-4 border-b border-blue-gray-50">
                    <p
                      class="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal"
                    >
                    ${item.Officer}
                    </p>
                  </td>
                  <td class="p-4 border-b border-blue-gray-50">
                  
                    <p
                      class="block antialiased font-sans text-sm leading-normal text-[${
                        item.btn_text_color
                      }] font-normal py-1 bg-[${
    item.btn_padding_color
  }] text-center rounded-sm flex items-center justify-center w-full gap-2"
                    >
                    ${item.icon ? `<img src="${item.icon}" alt="icon" />` : ""}
                    ${item.Status}
                    </p>
                  </td>
                </tr>`;
});

document.getElementById("createNew").addEventListener("click", function () {
  window.location.href = "/createNewInspection.html";
});
