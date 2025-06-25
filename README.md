This program aims to apply the concept of graph data structures to a real case study, namely the collaborative publication network between lecturers in the UNISSULA Informatics study program.

Vis.js – Interactive Visualization of Collaboration Networks
The purpose of programming using Vis.js is to display a collaborative network between lecturers in the form of an interactive graph on a web page. In the file, Vis.js is used to map a list of lecturers as nodes and collaborations between them as edges. Nodes are identified with unique IDs and lecturer name labels, then combined into a graph dataset using vis.DataSet. This visualization allows users to see direct relationships between lecturers intuitively through an easy-to-understand web display.

D3.js – Force-Directed Graph for Dynamic Layout
The purpose of programming D3.js is to compile a display of a collaboration network in the form of a dynamically arranged force-directed graph. Lecturers involved in the collaboration will be depicted as nodes, and collaboration relationships as connecting lines. D3.js provides a physical force effect where nodes will move away from each other and adjust their positions to avoid overlapping. This facilitates visual analysis of the network structure, especially to see collaboration clusters and connections between lecturer groups naturally.

Chart.js – Visualization of the Number of Collaborators (Titles)
The purpose of the Chart.js section is to calculate and visualize the number of collaborators (titles) of each lecturer in the form of a bar chart. The program counts how many times each lecturer's name appears in the collaboration relationship defined by the edge, then displays the results as a graph. This visualization allows users to identify the lecturers who collaborate the most, so that it can be used to measure the influence or role of lecturers in the collaboration network.

GraphVisualization.html – Main Display Structure
The GraphVisualization.html file serves as the main framework for the visualization display. Its purpose is to integrate all elements of the graph (Vis.js), dynamic graph (D3.js), and bar graph (Chart.js) into one structured page. This HTML organizes the layout into several sections such as header, graph display, and analytical graph. This file also manages calls to external libraries and local scripts (Vis.js, D3.js, and Chart.js) that are required to run all the visualizations together in a single web view.

Style.css – Page Layout and Appearance
The purpose of Style.css is to provide a clean, professional, and responsive visual appearance to the network visualization page. CSS controls elements such as the background color, the size of the visualization container (400px), the fonts used, margins, padding, and aesthetic effects such as shadows and radius. These styles make the visualization more pleasing to the eye and clean, and make it easier for users to distinguish between the graphical elements displayed, such as a network graph and a bar graph.

Learning Objectives
Academically, this Programming helps students understand how graph data structures are used in modeling real-world relationships, as well as practicing their technical skills in manipulating data and building dynamic web-based visualizations.
