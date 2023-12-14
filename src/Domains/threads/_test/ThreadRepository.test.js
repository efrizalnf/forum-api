const ThreadRepository = require('../ThreadRepository');

describe('ThreadRepository abstract', () => {
  it('should throw error when invoke abstract behavior', async () => {
    const threadRepo = new ThreadRepository();
    await expect(threadRepo.addThread({}).rejects.toThrowError('THREAD_REPOSITORY.METHOD_NOT_IMPLEMENTED'));
    await expect(threadRepo.isThreadExist('').rejects.toThrowError('THREAD_REPOSITORY.METHOD_NOT_IMPLEMENTED'));
    await expect(threadRepo.getThreadById('').rejects.toThrowError('THREAD_REPOSITORY.METHOD_NOT_IMPLEMENTED'));
  });
});
