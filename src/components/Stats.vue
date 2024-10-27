<template>
    <div>
      <h2>Attributes Table</h2>
      <table>
        <thead>
          <tr>
            <th>Attribute</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(value, attribute) in stats" :key="attribute">
            <td>{{ attribute }}</td>
            <td>{{ value }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      className: {
        type: String,
        required: true,
      },
      stats: {
        type: Object,
        required: true,
      },
    },
  };
  </script>
  
  <style scoped>
  /* Add any styles specific to the Stats component */
  table {
    width: 100%;
    border-collapse: collapse;
  }
  
  th, td {
    border: 1px solid #ddd;
    padding: 8px;
    text-align: left;
  }
  
  th {
    background-color: #f2f2f2;
  }
  </style>
  