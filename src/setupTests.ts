// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom/extend-expect';

// "plugin"

const jestTest = (global as any).test;

if (jestTest != null) {
  // const newTest = (description: string, cb: Function) => {
  //   return {
  //     withDocumentation: (anyObject: any) => {
  //       jestTest(description, cb);

  //       console.log(anyObject);
  //     }
  //   };
  // };
  const newTest = (description: string, cb: Function, metadata: any) => {
    jestTest(description, cb);

    console.log('metadata', metadata);
  };

  (global as any).test = newTest;
} else {
  console.error('Jest "test" not found');
}
