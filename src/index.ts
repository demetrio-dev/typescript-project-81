class Tag {
  private static readonly SINGLE_TAGS = new Set(['br', 'hr', 'img', 'input', 'link', 'meta']);

  constructor(
    private name: string,
    private attributes: Record<string, string> = {},
    private body = '',
  ) {}

  toString(): string {
    const attrs = Object.entries(this.attributes)
      .map(([key, value]) => ` ${key}="${value}"`)
      .join('');

    if (Tag.SINGLE_TAGS.has(this.name)) {
      return `<${this.name}${attrs}>`;
    }

    return `<${this.name}${attrs}>${this.body}</${this.name}>`;
  }
}

export { Tag };
