import { gqlCall } from '../../test-utils/gqlCall'

describe('LoginResolver', () => {
  test('should verify me query response', async () => {
    const LOGIN_QUERY = `
      mutation Login($email: String!, $password: String!) {
        login(
          email: $email,
          password: $password
        ) {
          accessToken
        }
      }
    `

    const response = await gqlCall({
      source: LOGIN_QUERY,
      variableValues: {
        email: 'random@random.com',
        password: 'coolpswd',
      },
    })

    expect(response).toMatchObject({
      data: {
        login: {
          accessToken: 'test',
        },
      },
    })
  })
})
