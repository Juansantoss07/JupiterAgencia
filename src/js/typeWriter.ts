export default function typeWriter(element: HTMLElement): void {
   if (element) {
      const textArray: string[] = element.innerHTML.split('');
      element.innerHTML = '';
      textArray.forEach((letra: string, i: number) => {
      setTimeout(() => element.innerHTML += letra, 75 * i);
   });
    }
 }
 