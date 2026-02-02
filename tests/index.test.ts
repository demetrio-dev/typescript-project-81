import { describe, it, expect } from 'vitest';
import { Tag } from '../src';

describe('Tag Class', () => {
  it('should generate a simple single tag like <br>', () => {
    const tag = new Tag('br');
    expect(tag.toString()).toBe('<br>');
  });

  it('should generate a single tag with attributes', () => {
    const tag = new Tag('img', { src: 'path/to/image', alt: 'test' });
    expect(tag.toString()).toBe('<img src="path/to/image" alt="test">');
  });

  it('should generate a paired tag without body', () => {
    const tag = new Tag('div');
    expect(tag.toString()).toBe('<div></div>');
  });

  it('should generate a paired tag with body and no attributes', () => {
    const tag = new Tag('label', {}, 'Email');
    expect(tag.toString()).toBe('<label>Email</label>');
  });

  it('should generate a paired tag with attributes and body', () => {
    const tag = new Tag('label', { for: 'email' }, 'Email');
    expect(tag.toString()).toBe('<label for="email">Email</label>');
  });

  it('should handle input tag as a single tag with attributes', () => {
    const tag = new Tag('input', { type: 'submit', value: 'Save' });
    expect(tag.toString()).toBe('<input type="submit" value="Save">');
  });
});
