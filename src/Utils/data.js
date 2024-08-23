const data = {
  "categories": [
    {
      "id": 1,
      "name": "CSPM Executive Dashboard",
      "widgets": [
        {
          "id": 101,
          "name": "Widget 1",
          "type": "progress",
          "data": {
            "text": "Widget 1 text",
            "progress": 70
          }
        },
        {
          "id": 102,
          "name": "Widget 2",
          "type": "piechart",
          "data": {
            "text": "Widget 2 text",
            "chartData": [30, 70]
          }
        }
      ]
    },
    {
      "id": 2,
      "name": "Sales Performance Dashboard",
      "widgets": [
        {
          "id": 201,
          "name": "Widget 3",
          "type": "progress",
          "data": {
            "text": "Widget 3 text",
            "progress": 50
          }
        },
        {
          "id": 202,
          "name": "Widget 4",
          "type": "piechart",
          "data": {
            "text": "Widget 4 text",
            "chartData": [60, 40]
          }
        }
      ]
    }
  ]
}

export default data;