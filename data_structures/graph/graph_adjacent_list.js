class Graph {
  constructor() {
    this.nodesCount = 0;
    this.nodes = {};

    this.root = null;
  }


  // O(1)
  insertNode(vertex) {
    this.nodes[vertex] = {};

    if (!this.nodesCount) {
      this.root = vertex;
    }

    this.nodesCount++;
  }


  // O(1)
  createEdge(from, to, weight) {
    this.nodes[from][to] = weight;
  }

  createBiDirectionEdge(from, to, weight) {
    this.nodes[from][to] = this.nodes[to][from] = weight;
  }

  //O(1)
  removeEdge(from, two) {
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


  // Graph.
  BFS_Recursive(levelNodes) {
    if (levelNodes && levelNodes.length) {

      levelNodes.forEach((vertex) => {
        this.nodes[vertex].touched = true;
      });

      console.log(`${levelNodes.join(' ')}`);
      let newLevelNodes = [];

      levelNodes.forEach((vertex) => {
        // console.log(`Details- ${vertex} - ${JSON.stringify(this.nodes[vertex])}`);
        if (this.nodes[vertex]) {
          Object.keys(this.nodes[vertex]).forEach((vertex) => {
            if ((vertex != 'touched') && (!this.nodes[vertex].touched)) {
              newLevelNodes.push(vertex);
            }
          });
        }
      });
      this.BFS_Recursive(newLevelNodes);
    }
  }

  // Graph.
  DFS_Recursive(vertex) {

    if (this.nodes[vertex] && (!this.nodes[vertex].touched)) {

      console.log(vertex);
      // Need to clone before applying this modification.
      this.nodes[vertex].touched = true;

      Object.keys(this.nodes[vertex]).forEach((vertex) => {
        this.DFS_Recursive(vertex);
      });

    }

  }



  // TODO
  /* 
    1-Get all possible ways with weights.
    2-Get the fastest one.
  */


}


// testing.
var graph = new Graph();
// graph.insertNode('Imbaba');
// graph.insertNode('Saft');
// graph.insertNode('Haram');
// graph.insertNode('October');
// graph.insertNode('Giza');
// graph.insertNode('Circle-Road');

// graph.createEdge('Imbaba', 'Saft', 5);
// graph.createEdge('Saft', 'Imbaba', 5);

// graph.createEdge('Haram', 'Saft', 5);
// graph.createEdge('Saft', 'Haram', 5);

// graph.createEdge('Haram', 'October', 5);
// graph.createEdge('October', 'Haram', 5);

// graph.createEdge('Imbaba', 'Giza', 6);
// graph.createEdge('Giza', 'Imbaba', 6);

// graph.createEdge('Giza', 'Saft', 3);
// graph.createEdge('Saft', 'Giza', 3);


// graph.createEdge('Giza', 'Haram', 2);
// graph.createEdge('Haram', 'Giza', 2);

// graph.createEdge('Imbaba', 'Circle-Road', 1);
// graph.createEdge('Circle-Road', 'Imbaba', 1);

// graph.createEdge('Haram', 'Circle-Road', 4);
// graph.createEdge('Circle-Road', 'Haram', 4);

// graph.removeEdge('October' , 'Haram');

graph.insertNode('A');
graph.insertNode('B');
graph.insertNode('C');
graph.insertNode('M');
graph.insertNode('Z');
graph.insertNode('Y');
graph.insertNode('X');
graph.insertNode('F');
graph.insertNode('T');
graph.insertNode('L');
graph.insertNode('E');

graph.createBiDirectionEdge('A', 'C', 1);
graph.createBiDirectionEdge('A', 'B', 1);
graph.createBiDirectionEdge('A', 'Z', 1);
graph.createBiDirectionEdge('B', 'Z', 1);
graph.createBiDirectionEdge('B', 'Y', 1);
graph.createBiDirectionEdge('B', 'X', 1);
graph.createBiDirectionEdge('C', 'M', 1);
graph.createBiDirectionEdge('X', 'F', 1);
graph.createBiDirectionEdge('Y', 'T', 1);
graph.createBiDirectionEdge('T', 'L', 1);
graph.createBiDirectionEdge('F', 'E', 1);


// Note: need to clone here due to 'touched' field.
// graph.BFS_Recursive([graph.root]);
// graph.DFS_Recursive(graph.root);