const AddedThread = require('../../../Domains/threads/entities/AddedThread');
const ThreadRepository = require('../../../Domains/threads/ThreadRepository');
const AddThreadUseCase = require('../AddThreadUseCase');

describe('AddThreadUseCase', () => {
  it('should orchestrating the add thread action correctly', async () => {
    const mockThreadRepo = new ThreadRepository();

    const mockReturnAddedThread = new AddedThread({
      id: 'thread-123',
      title: 'title',
      user: 'user-123',
    });

    mockThreadRepo.addThread = jest.fn(() => Promise.resolve(mockReturnAddedThread));

    const useCase = new AddThreadUseCase({
      threadRepository: mockThreadRepo,
    });

    const useCasePayload = {
      title: 'title',
      body: 'body',
      owner: 'user-123',
    };

    const expectedAddedThread = new AddedThread({
      id: 'thread-123',
      title: 'title',
      user: 'user-123',
    });

    // Action
    const addedThread = await useCase.execute(useCasePayload);

    // Assesrt
    expect(addedThread).toEqual(expectedAddedThread);
    expect(mockThreadRepo.addThread).toBeCalledWith(useCasePayload);
  });
});
