const data = {
  "categories": [
    {
      "id": 1,
      "name": "Marketing Analytics Dashboard",
      "widgets": [
        {
          "id": 101,
          "name": "Traffic Sources",
          "type": "piechart",
          "data": {
            "text": "Distribution of traffic sources",
            "chartData": [40, 25, 20, 15]
          }
        },
        {
          "id": 102,
          "name": "Campaign Performance",
          "type": "progress",
          "data": {
            "text": "Campaign completion rate",
            "progress": 85
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
          "name": "Quarterly Sales",
          "type": "progress",
          "data": {
            "text": "Sales target achievement",
            "progress": 70
          }
        },
        {
          "id": 202,
          "name": "Top Products",
          "type": "piechart",
          "data": {
            "text": "Sales distribution by product",
            "chartData": [50, 30, 20]
          }
        }
      ]
    },
    {
      "id": 3,
      "name": "Customer Support Dashboard",
      "widgets": [
        {
          "id": 301,
          "name": "Tickets Resolution Time",
          "type": "progress",
          "data": {
            "text": "Average time to resolve tickets",
            "progress": 60
          }
        },
        {
          "id": 302,
          "name": "Customer Satisfaction",
          "type": "piechart",
          "data": {
            "text": "Satisfaction rating breakdown",
            "chartData": [75, 15, 10]
          }
        }
      ]
    },
    {
      "id": 4,
      "name": "Financial Overview Dashboard",
      "widgets": [
        {
          "id": 401,
          "name": "Monthly Revenue",
          "type": "progress",
          "data": {
            "text": "Revenue against target",
            "progress": 90
          }
        },
        {
          "id": 402,
          "name": "Expense Breakdown",
          "type": "piechart",
          "data": {
            "text": "Distribution of expenses",
            "chartData": [40, 25, 20, 15]
          }
        }
      ]
    },
    {
      "id": 5,
      "name": "Project Management Dashboard",
      "widgets": [
        {
          "id": 501,
          "name": "Project Progress",
          "type": "progress",
          "data": {
            "text": "Completion status of projects",
            "progress": 65
          }
        },
        {
          "id": 502,
          "name": "Task Allocation",
          "type": "piechart",
          "data": {
            "text": "Tasks by team member",
            "chartData": [35, 25, 20, 20]
          }
        }
      ]
    },
    {
      "id": 6,
      "name": "HR Analytics Dashboard",
      "widgets": [
        {
          "id": 601,
          "name": "Employee Turnover",
          "type": "progress",
          "data": {
            "text": "Turnover rate this quarter",
            "progress": 40
          }
        },
        {
          "id": 602,
          "name": "Training Completion",
          "type": "piechart",
          "data": {
            "text": "Completion rates of training programs",
            "chartData": [60, 25, 15]
          }
        }
      ]
    }
  ]
}

export default data;
