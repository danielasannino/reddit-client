import { waitForReact, Selector } from 'testcafe-react-selectors';

// eslint-disable-next-line no-undef
fixture`Basic end-to-end UI test`
    .page`http://localhost:3000`
    .beforeEach(async () => {
        await waitForReact();
    })

test('Changes subreddit to r/memes when button clicked', async t => {

    const currentCategory = Selector('PostList').find('span')

    await t
        .click(Selector('CategoriesListItem').withKey('memes'))

        .expect(currentCategory.innerText).eql('r/memes')
})
