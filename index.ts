// 1. Array operations
const head = (array: any[]) => {
  const [first] = array;
  return [first];
};
const tail = (array: [any?, ...any[]]) => {
  const [, ...rest] = array;
  return rest;
};

const init = (array: any[]) => {
  return array.slice(0, array.length - 1);
};

const last = (array: any[]) => {
  return array[array.length - 1];
};

// 2. Concat
const concat = (a: any, b: any) => {
  return [...a, ...b];
};

const concatMultiple = (a: any, ...rest: any[]) => {
  return [...a, ...rest];
};

// 3. Clone Merge
const clone = (source: any) => ({ ...source });

const merge = (source: any, target: any) => Object.assign(target, source);

//4. Read Books
interface Book {
  title: string;
  isRead: boolean;
}

const isBookRead = (books: Book[], titleToSearch: string) => {
  const result = books.find((book) => book.title === titleToSearch);
  return result ? result.isRead : false;
};

// 5. Slot Machine
class SlothMachine {
  private counter: number = 0;

  play() {
    if (this.getRouletteResult()) {
      console.log(`Congratulations!!!. You won ${this.counter} coins!!`);
      this.counter = 0;
    } else {
      console.log("Good luck next time!!");
      this.counter++;
    }
  }

  private getRouletteResult = () => {
    return (
      this.getRandomBoolean() &&
      this.getRandomBoolean() &&
      this.getRandomBoolean()
    );
  };

  private getRandomBoolean = (): boolean => Math.random() < 0.5;
}

const machine1 = new SlothMachine();
machine1.play(); // "Good luck next time!!"
machine1.play(); // "Good luck next time!!"
machine1.play(); // "Congratulations!!!. You won 3 coins!!"
machine1.play(); // "Good luck next time!!"
machine1.play(); // "Congratulations!!!. You won 2 coins!!"
machine1.play(); // "Congratulations!!!. You won 2 coins!!"
machine1.play(); // "Congratulations!!!. You won 2 coins!!"
machine1.play(); // "Congratulations!!!. You won 2 coins!!"
machine1.play(); // "Congratulations!!!. You won 2 coins!!"
