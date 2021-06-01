/**
 * 
 * @todo rewrite any type
 */
export function compose<Input extends Parameters<any>, Output extends ReturnType<any>>(
  checkConstraintsFunc: (...args: Input) => void,
  mainFunc: (...args: Input) => Output
): (...args: Input) => Output {
  return (...args: Input) => {
    checkConstraintsFunc(...args);
    return mainFunc(...args);
  };
}
