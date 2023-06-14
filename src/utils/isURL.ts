export default function isURL(input: string): boolean {
    const urlRegex = /^(?:\w+:)?\/\/([^\s.]+\.\S{2}|localhost[:?\d]*)\S*$/;
    return urlRegex.test(input);
  }