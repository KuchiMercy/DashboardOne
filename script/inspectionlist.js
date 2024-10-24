const inspectionListTable = [
  {
    ID: 10321,
    Date: '15/06/2023',
    Name: 'Rovenheights properties',
    'Inspection method': 'Digital',
    Officer: 'Mustapha Onasanya',
    Status: 'Ongoing',
    btn_text_color: '#FF7A00',
    btn_padding_color: '#FFDEBF',
  },
  {
    ID: 10321,
    Date: '15/06/2023',
    Name: 'Shoprite Stores',
    'Inspection method': 'Manual',
    Officer: 'Mustapha Onasanya',
    Status: 'Completed',
    btn_text_color: '#027A48',
    btn_padding_color: '#ECFDF3',
  },
];

const inspection_list_table_body = document.getElementById(
  'inspection-list-table'
);

inspectionListTable.forEach((item) => {
  inspection_list_table_body.innerHTML += `
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
                    ${item.Date}
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
                    <p
                      class="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal"
                    >
                    ${item['Inspection method']}
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
                    ${item.icon ? `<img src="${item.icon}" alt="icon" />` : ''}
                    ${item.Status}
                    </p>
                  </td>
                </tr>`;
});
