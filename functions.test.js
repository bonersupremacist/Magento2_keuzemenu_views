const { JSDOM } = require("jsdom");

describe("restartForm", () => {
  let dom;
  let restartForm;

  beforeEach(() => {
    // Create a simulated DOM environment
    dom = new JSDOM(`
      <html>
        <body>
          <div id="explanationDiv">Explanation Content</div>
          <div id="more">More Content</div>
        </body>
      </html>
    `);

    // Set global objects from the simulated DOM
    global.document = dom.window.document;
    global.window = dom.window;

    // Mock functions and set initial state
    givenAnswers = ["Answer 1", "Answer 2"];
    questionPath = ["Question 1", "Question 2"];
    currentQuestionIndex = 1;
    restartProgressBar = jest.fn();
    createStartButton = jest.fn();
   
    // Import the function to be tested
    restartForm = require("./functions.js").restartForm;
  });
          
  afterEach(() => {
    // Clean up global objects
    delete global.document;
    delete global.window;

    // Reset state variables
    givenAnswers = [];
    questionPath = [];
    currentQuestionIndex = 0;
  });

  it("should reset state and DOM elements correctly", () => {
    // Call the function to be tested
    restartForm();

    // Check if state variables are reset
    expect(currentQuestionIndex).toBe(0);
    expect(givenAnswers).toEqual([]);
    expect(questionPath).toEqual([]);

    // Check if functions are called
    expect(restartProgressBar).toHaveBeenCalled();
    expect(createStartButton).toHaveBeenCalled();

    // Check if DOM elements are updated
    expect(document.getElementById("explanationDiv").innerHTML).toBe("");
    expect(document.getElementById("more").innerHTML).toBe("");
  });
});
