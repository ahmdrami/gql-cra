import { Service } from 'typedi'

@Service()
export class UserService {
  private readonly items: string[] = ['John', 'Bradley', 'Anna']

  getOne(): string | undefined {
    return this.items[Math.floor(Math.random() * this.items.length)]
  }
}
