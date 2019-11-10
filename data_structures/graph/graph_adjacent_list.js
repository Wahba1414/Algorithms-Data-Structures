class Graph {
  constructor() {
    this.nodesCount = 0;
    this.adjacents = {};
  }


  insertNode(vertex) {
    this.adjacents[vertex] = {};
    this.nodesCount++;
  }


  createEdge(from, two, weight) {
    this.adjacents[from][two] = weight;
  }


  print() {
    var allNodes = Object.keys(this.adjacents);

    allNodes.forEach((node) => {
      let currentNode = this.adjacents[node];


      let logs = `${node} ---> `;

      var connections = Object.keys(currentNode);


      connections.forEach(function (conn) {
        logs += `(${conn} , ${currentNode[conn]})`;
      });

      console.log(logs);
    });

  }


}


// testing.
var graph = new Graph();
graph.insertNode(1);
graph.insertNode(2);
graph.insertNode(3);
graph.insertNode(4);

graph.createEdge(1, 2, 10);
graph.createEdge(2, 1, 15);

graph.createEdge(1, 3, 30);

graph.createEdge(2, 3, 40);

graph.createEdge(3, 4, 50);

graph.print();