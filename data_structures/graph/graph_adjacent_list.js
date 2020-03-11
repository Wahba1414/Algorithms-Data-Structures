class Graph {
  constructor() {
    this.nodesCount = 0;
    this.nodes = {};
  }


  // O(1)
  insertNode(vertex) {
    this.nodes[vertex] = {};
    this.nodesCount++;
  }


  // O(1)
  createEdge(from, two, weight) {
    this.nodes[from][two] = weight;
  }

  //O(1)
  removeEdge(from, two){
    delete this.nodes[from][two];
  }

  print() {
    var allNodes = Object.keys(this.nodes);

    allNodes.forEach((node) => {
      let from = this.nodes[node];

      let logs = `${node} ---> `;

      let edges = Object.keys(from);

      edges.forEach(function (to) {
        logs += `(${to} , ${from[to]})`;
      });

      console.log(logs);
    });

  }

  // TODO
  /* 
    1-Get all possible ways with weights.
    2-Get the fastest one.
  */


}


// testing.
var graph = new Graph();
graph.insertNode('Imbaba');
graph.insertNode('Saft');
graph.insertNode('Haram');
graph.insertNode('October');
graph.insertNode('Giza');
graph.insertNode('Circle-Road');

graph.createEdge('Imbaba', 'Saft', 5);
graph.createEdge('Saft', 'Imbaba', 5);

graph.createEdge('Haram', 'Saft', 5);
graph.createEdge('Saft', 'Haram', 5);

graph.createEdge('Haram', 'October', 5);
graph.createEdge('October', 'Haram', 5);

graph.createEdge('Imbaba', 'Giza', 6);
graph.createEdge('Giza', 'Imbaba', 6);

graph.createEdge('Giza', 'Saft', 3);
graph.createEdge('Saft', 'Giza', 3);


graph.createEdge('Giza', 'Haram', 2);
graph.createEdge('Haram', 'Giza', 2);

graph.createEdge('Imbaba', 'Circle-Road', 1);
graph.createEdge('Circle-Road', 'Imbaba', 1);

graph.createEdge('Haram', 'Circle-Road', 4);
graph.createEdge('Circle-Road', 'Haram', 4);

// graph.removeEdge('October' , 'Haram');
graph.print();