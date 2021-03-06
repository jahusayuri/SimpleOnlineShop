﻿using System.Collections.Generic;

namespace SimpleOnlineShop.SimpleOnlineShop.Domain
{
    public interface IRepository<TAggregate>
        where TAggregate : IAggregateRoot
    {
        IUnitOfWork UnitOfWork { get; }

        TAggregate FindById(long id);
        IEnumerable<TAggregate> FindAll();
        void Add(TAggregate aggregate);
        void Remove(TAggregate aggregate);
        void Modify(TAggregate aggregate);
        void RemoveById(long id);
    }
}